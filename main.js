function Tmain() {
    var main = this;

    const EXAMS = {
        'ADMIN_2018' : 'Netsuite Administrator (2018)'
    };

    const CHALLENGES = {
        'INCREMENTAL_STUDY' : 'Incremental study',
        'CHAPTER_TEST'      : 'Selected chapter test',
        'OPEN_BOOK_TEST'    : 'Open book test',
        'FULL_TEST_UNTIMED' : 'Full test without a timer',
        'FULL_TEST'         : 'Full simulation test',
    };

    const SCREENS = {
        'EXAM_SELECT'       : 1,
        'CHALLENGE_SELECT'  : 2,
        'CHAPTER_SELECT'    : 3,
        'CHALLENGE'         : 4,
        'QUESTION'          : 5,
        'READY_TO_FINISH'   : 6,
        'SUMMARY_REVIEW'    : 7,
        'SUMMARY_FINISH'    : 8,
    };


    main.init = function() {
        main.currentScreen      = SCREENS.EXAM_SELECT;
        main.currentExam        = ADMIN_2018; //Referenced in questions_admin.js now. TODO refactor when will more exams
        main.currentChallenge   = '';
        main.currentChapter     = '';
        main.currentQuestion    = '';
        main.currentQuestionNum = '';
        main.examObject         = '';
        main.chapters           = {};
        main.questions          = [];
        main.wrongAnswers       = 0;

        main.shiftStage(main.currentScreen);
    };

    main.shiftStage = function(stageId) {
        var body = $('body');
        body.empty();

        if (stageId === SCREENS.EXAM_SELECT) {
            body.append('<h2>Welcome to NS Study!</h2>');
            body.append('<p>Please select your exam: </p><select id="exam_select"></select>');
            body.append('<span class="submit_btn" id="exam_submit_btn">Submit</span>');

                // Show the available Exams and the Submit button
            var examSelect = $('#exam_select');
            $.each(EXAMS, function (key, value) {
                examSelect.append($('<option>', {
                    value: key,
                    text: value
                }));
            });

            var submitBtn = $('#exam_submit_btn');
            submitBtn.on('click', function () {
                main.shiftStage(SCREENS.CHALLENGE_SELECT)
            })
        }

        if (stageId === SCREENS.CHALLENGE_SELECT) {
            body.append('<h2>Challenge Select</h2>');
            body.append('<p>Please select the challenge you want to face today: </p><select id="challenge_select"></select>');
            body.append('<span class="submit_btn" id="exam_submit_btn">Submit</span>');

                // Show the available Challenges and the Submit button
            var challengeSelect = $('#challenge_select');
            $.each(CHALLENGES, function (key, value) {
                challengeSelect.append($('<option>', {
                    value: key,
                    text: value
                }));
            });

                // If the Challenge is Chapter Test, go to Select the Chapter screen
            var submitBtn = $('#exam_submit_btn');
            submitBtn.on('click', function () {
                main.currentChallenge = challengeSelect.val();
                if (main.currentChallenge === 'CHAPTER_TEST') {
                    main.shiftStage(SCREENS.CHAPTER_SELECT)
                }
                else {
                    main.shiftStage(SCREENS.CHALLENGE)
                }
            })
        }

        if (stageId === SCREENS.CHAPTER_SELECT) {
            body.append('<h2>Chapter Select</h2>');
            body.append('<p>Please select the chapter you want to focus on today: </p><select id="chapter_select"></select>');
            body.append('<span class="submit_btn" id="exam_submit_btn">Submit</span>');

                // Show the available Chapters and the Submit button
            main.getChapters();
            var chapterSelect = $('#chapter_select');
            $.each(main.chapters, function (key, value) {
                chapterSelect.append($('<option>', {
                    value: key,
                    text: value
                }));
            });

            var submitBtn = $('#exam_submit_btn');
            submitBtn.on('click', function () {
                main.currentChapter = chapterSelect.val();
                main.shiftStage(SCREENS.CHALLENGE)
            })
        }

        if (stageId === SCREENS.CHALLENGE) {
            body.append('<h2>Ready to start '+CHALLENGES[main.currentChallenge]+' challenge.</h2>');
            body.append('<p>Click on the submit button to start.</p>');
            body.append('<span class="submit_btn" id="start_submit_btn">Submit</span>');

                // Gather and shuffle questions for the particular Exam/Challenge
            main.prepareQuestions();
            main.currentQuestionNum = 0;

                // Click on this Submit button to start displaying the questions
            var startButton = $('#start_submit_btn');
            startButton.on('click', function () {
                main.shiftStage(SCREENS.QUESTION);
            })
        }

        if (stageId === SCREENS.QUESTION) {

                // Set the current question
            main.currentQuestion = main.questions[main.currentQuestionNum];

                // Show the question and optionally chapter and title

            body.append('<h2>' + CHALLENGES[main.currentChallenge]+ '</h2>');
            body.append('<p>Question #' + (main.currentQuestionNum - main.wrongAnswers + 1) + ' out of ' +(main.questions.length - main.wrongAnswers)+' </p><br>');
            body.append('<p>Question: ' + main.currentQuestion.question.join('<br>') +' </p><br>');

            if (main.currentQuestion.answers.length > 1) {
                body.append('<p>Please select ' + main.currentQuestion.answers.length + ' answers</p><br>');
            }



            if (main.currentQuestion.type === 'match') {
                var selectOptions = [];
                var answerLines = {};

                    // if question key is a number - it is a match option going into the select field. If it is a letter - it is an answer line
                $.each(main.currentQuestion.options, function(key, option) {
                    if (isNaN(key)) {
                        answerLines[key] = option;
                    }
                    else {
                        selectOptions.push(option)
                    }
                });

                    // Display the answer lines first
                $.each(answerLines, function(key, option) {
                    body.append('<select id="answer_select_' + key + '"></select><span> ' + key + ':' + option +' </span><br>');
                    var answerSelect = $('#answer_select_' + key);

                        // Add a blank option
                    answerSelect.append($('<option>', {value: '', text: ''}));

                        // Add an option for every selectOptions member (number)
                    $.each(selectOptions, function (index) {
                        answerSelect.append($('<option>', {
                            value: (index + 1),
                            text: (index+1)
                        }));
                    });
                });

                body.append('<br>');

                    // Then show the key to the number select
                $.each(selectOptions, function (index, option) {
                    body.append('<span> ' + (index + 1) + ': ' + option +' </span><br>');
                });
            }
            else {
                // Draw a checkbox for every answer.
                $.each(main.currentQuestion.options, function(key, option){
                    body.append('<input type="checkbox" id="checkbox_'+key+'"><span> ' + key + ': ' + option +' </span><br>');

                    // When selecting a checkbox where you need only one answer, clean all other checkboxes
                    if (main.currentQuestion.answers.length === 1) {

                        $("#checkbox_"+key).on('click', function(){

                            $.each(main.currentQuestion.options, function(innerKey) {

                                if (key !== innerKey) {
                                    $("#checkbox_"+innerKey).prop("checked", false);
                                }
                            })
                        });
                    }
                });
            }

                // Draw the Submit button
            body.append('<br><span class="submit_btn" id="question_submit_btn">Submit</span>');
            var qSubmitBtn = $('#question_submit_btn');
            qSubmitBtn.on('click', function() {

                    // Remove the the question submit button
                qSubmitBtn.remove();

                var userAnswers = [];
                var badMatchAnswer = false;

                    // Save user answers
                if (main.currentQuestion.type === 'match') {

                    // if question key is a number - it is a match option going into the select field. If it is a letter - it is an answer line // TODO refactor reappearing bit
                    $.each(main.currentQuestion.options, function(key, option) {
                        if (isNaN(key)) {
                            answerLines[key] = option;
                        }
                        else {
                            selectOptions.push(option)
                        }
                    });


                    $.each(answerLines, function(key, option) {
                        var optionChosen = $('#answer_select_' + key).val();

                            // If an answer had a blank selected remaining mark for return when the validation is complete
                        if (!optionChosen) {
                            badMatchAnswer = true;
                        }
                        userAnswers.push(key + optionChosen);
                    });
                }
                else {
                    $.each(main.currentQuestion.options, function (key, option) {
                        var isChecked = $('#checkbox_' + key).prop("checked");
                        if (isChecked) {
                            userAnswers.push(key)
                        }
                    });
                }
                main.currentQuestion.userAnswers = userAnswers;


                if (badMatchAnswer) {
                    alert('Please match every answer with a valid option');
                    main.shiftStage(SCREENS.QUESTION);
                    return;
                }

                    // Alert if the number of answers is wrong
                if (main.currentQuestion.answers.length !== userAnswers.length) {
                    alert('Wrong number of answers, please choose ' + main.currentQuestion.answers.length);
                    main.shiftStage(SCREENS.QUESTION);
                    return;
                }

                    // Find if the answer(s) are correct
                main.currentQuestion.isCorrect = true;
                $.each(userAnswers, function(index, value) {
                    if (value !== main.currentQuestion.answers[index]) {
                        main.currentQuestion.isCorrect = false;
                    }
                });

                    // If incorrect, push the current question to be repeated in the future
                if (!main.currentQuestion.isCorrect && main.currentChallenge === 'INCREMENTAL_STUDY') {
                    var repeatedQuestionIndex = main.currentQuestionNum + 2 + Math.floor((Math.random() * 3)); // 2 - 4 questions ahead
                    repeatedQuestionIndex = Math.min(repeatedQuestionIndex, main.questions.length );
                    main.questions.splice(repeatedQuestionIndex, 0, main.currentQuestion);
                    main.wrongAnswers++;
                }

                    // Show the Correct/Wrong text
                body.append('<p>' + (main.currentQuestion.isCorrect ? 'Correct!' : 'Wrong!') + ' The right answer is: ' + main.currentQuestion.answers.join(', ') + '</p><br>');

                body.append('<p>Chapter: ' + main.currentQuestion.chapter +'</p>');
                body.append('<p>Subject: ' + main.currentQuestion.title + '</p><br>');

                    // Show "How to Study" section
                var studyTextAndLinks = "";
                $.each(main.currentQuestion.study, function(index, value) {
                    if (value.text) {
                        if (value.link === "") {
                            studyTextAndLinks += '<br>' + value.text;
                        }
                        else {
                            studyTextAndLinks += '<br><a href="' + value.link + '">' + value.text + '</a>';
                        }
                    }
                });
                body.append('<p><b>How to study</b> ' + studyTextAndLinks + '</p><br>');

                    // Show the "Next" Button to move to next question of to the ready to finish stage.
                body.append('<span class="submit_btn" id="answer_submit_btn">Next</span>');
                $('#answer_submit_btn').on('click', function() {
                    main.currentQuestionNum++;

                    if (main.currentQuestionNum >= main.questions.length) {
                        if (main.currentChallenge === 'INCREMENTAL_STUDY') {
                            main.shiftStage(SCREENS.SUMMARY_FINISH);
                        }
                        else {
                            main.shiftStage(SCREENS.READY_TO_FINISH);
                        }
                    }
                    else {
                        main.shiftStage(SCREENS.QUESTION);
                    }

                });
            });
        }

        if (stageId === SCREENS.READY_TO_FINISH) {
            body.append('<h2>The End</h2>');
            body.append('<p>You have answered all the questions of this challenge. Do you want to review your answers, or are you ready to finish the challenge?</p><br>');
            body.append('<span class="submit_btn" id="finish_submit_btn">Finish test</span>');
            body.append('<span class="submit_btn" id="review_submit_btn">Review</span>');

            var finishButton = $('#finish_submit_btn');
            var reviewButton = $('#review_submit_btn');

                // Just move to either the summary or review screens from here
            finishButton.on('click', function () {
                main.shiftStage(SCREENS.SUMMARY_FINISH);
            });

            reviewButton.on('click', function () {
                main.shiftStage(SCREENS.SUMMARY_REVIEW);
            });
        }

        if (stageId === SCREENS.SUMMARY_REVIEW) {
            body.append('<h2>Review Summary</h2>');

                // Draw a summary table
            var reviewTableString = '<table class="summary_table">';
            reviewTableString += '<thead><th>Question #</th><th>Your Answers</th><th>Review</th></thead>';
            reviewTableString += '<tbody id="summary_table_body">';

            $.each(main.questions, function(index, question) {
                var reviewButton = '<span class="submit_btn" style="background-color: cornflowerblue" id="review_q_"'+index+'>Review</span>';
                reviewTableString += '<tr><td>'+index+'</td><td>'+question.userAnswers.join(',')+'</td><td>'+reviewButton+'</td></tr>';
            });

            reviewTableString += '</tbody></table>';
            body.append(reviewTableString);

                // Add the Finish Test button
            body.append('<br><span class="submit_btn" id="finish_submit_btn">Finish test</span>');
            var finishButton = $('#finish_submit_btn');
            finishButton.on('click', function () {
                main.shiftStage(SCREENS.SUMMARY_FINISH);
            });
        }

        if (stageId === SCREENS.SUMMARY_FINISH) {
            body.append('<h2>The end</h2>');
            body.append('<p>You have reached the end of your challenge.</p><br>');

            var metricElements = main.getMetricElements();

            body.append(metricElements);

                // Add the "Home" Button
            body.append('<br><span class="submit_btn" id="home_btn">Home</span>');
            var homeButton = $('#home_btn');
            homeButton.on('click', function () {
                main.shiftStage(SCREENS.EXAM_SELECT);
            });
        }
    };

    main.getChapters = function() {
        $.each(main.currentExam, function(index, value){
            var chapterName = value.chapter;
            var key = chapterName.trim().replace(/ /g, '_').toUpperCase();
            main.chapters[key] = chapterName;
        });
    };

    main.prepareQuestions = function() {
        if (main.currentChallenge === 'CHAPTER_TEST' && main.currentChapter) {
            var questions = main.currentExam.filter(function(question){
                var key = question.chapter.trim().replace(/ /g, '_').toUpperCase();
                return key === main.currentChapter;
            });
        }
        else {
            var questions = main.currentExam;
        }
        main.questions = main.shuffle(questions);
    };

    main.shuffle = function (a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    };

    main.getMetricElements = function() {
        return '<p>Metrics  placeholder</p>'
    }
}