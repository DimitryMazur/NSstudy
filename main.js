function Tmain() {
    var main = this;

    const EXAMS = {
        'ADMIN_2018' : 'Netsuite Administrator (2018)'
    };

    const CHALLENGES = {
        'CHAPTER_TEST'      : 'Selected chapter test',
        'INCREMENTAL_STUDY' : 'Incremental study',
        'OPEN_BOOK_TEST'    : 'Open Book Test',
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
        main.shiftStage(main.currentScreen);
    };

    main.shiftStage = function(stageId) {
        var body = $('body');
        body.empty();

        if (stageId === SCREENS.EXAM_SELECT) {
            body.append('<h2>Welcome to NS Study!</h2>');
            body.append('<p>Please select your exam: </p><select id="exam_select"></select>');
            body.append('<span class="submit_btn" id="exam_submit_btn">Submit</span>');

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

            var challengeSelect = $('#challenge_select');
            $.each(CHALLENGES, function (key, value) {
                challengeSelect.append($('<option>', {
                    value: key,
                    text: value
                }));
            });

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

            main.prepareQuestions();
            main.currentQuestionNum = 0;

            var startButton = $('#start_submit_btn');
            startButton.on('click', function () {
                main.shiftStage(SCREENS.QUESTION);
            })
        }

        if (stageId === SCREENS.QUESTION) {
            main.currentQuestion = main.questions[main.currentQuestionNum];

            body.append('<p>Question #' + (main.currentQuestionNum + 1) + ' out of ' +(main.questions.length)+' </p><br>');

            if (main.currentChallenge === 'OPEN_BOOK_TEST') {
                body.append('<p>Chapter: ' + main.currentQuestion.chapter +'</p>');
                body.append('<p>Subject: ' + main.currentQuestion.title + '</p><br>');
            }

            body.append('<p>Question: ' + main.currentQuestion.question.join('<br>') +' </p><br>');

            $.each(main.currentQuestion.options, function(key, option){
                body.append('<input type="checkbox" id="checkbox_'+key+'"><span> ' + key + ': ' + option +' </span><br>');
            });

            body.append('<br><span class="submit_btn" id="question_submit_btn">Submit</span>');

            var qSubmitBtn = $('#question_submit_btn');

            qSubmitBtn.on('click', function() {

                qSubmitBtn.remove();

                var userAnswers = [];
                $.each(main.currentQuestion.options, function (key, option) {
                    var isChecked = $('#checkbox_' + key).prop("checked");
                    if (isChecked) {
                        userAnswers.push(key)
                    }
                });

                if (main.currentQuestion.answers.length !== userAnswers.length) {
                    alert('Wrong number of answers, please choose ' + main.currentQuestion.answers.length);
                    main.shiftStage(SCREENS.QUESTION);
                    return;
                }

                main.currentQuestion.isCorrect = true;

                $.each(userAnswers, function(index, value) {
                    if (value !== main.currentQuestion.answers[index]) {
                        main.currentQuestion.isCorrect = false;
                    }
                });
                main.currentQuestion.userAnswers = userAnswers;

                body.append('<p>' + (main.currentQuestion.isCorrect ? 'Correct!' : 'Wrong!') + ' the right answer is: ' + main.currentQuestion.answers.join(', '));
                body.append('<p><b>How to study</b> : ' + main.currentQuestion.study + '</p><br>');
                body.append('<span class="submit_btn" id="answer_submit_btn">Next</span>');

                $('#answer_submit_btn').on('click', function() {
                    main.currentQuestionNum++;

                    if (main.currentQuestionNum >= main.questions.length) {
                        main.shiftStage(SCREENS.READY_TO_FINISH);
                    }
                    else {
                        main.shiftStage(SCREENS.QUESTION);
                    }
                });
            });
        }

        if (stageId === SCREENS.READY_TO_FINISH) {
            body.append('<h2>The End</h2>');
            body.append('<p>You have reached the end of your challenge. Do you want to review your answers, or are you ready to finish the challenge?</p><br>');
            body.append('<span class="submit_btn" id="finish_submit_btn">Finish him!</span>');
            body.append('<span class="submit_btn" id="review_submit_btn">Review!</span>');

            var finishButton = $('#finish_submit_btn');
            var reviewButton = $('#review_submit_btn');

            finishButton.on('click', function () {
                main.shiftStage(SCREENS.SUMMARY_FINISH);
            });

            reviewButton.on('click', function () {
                main.shiftStage(SCREENS.SUMMARY_REVIEW);
            });
        }

        if (stageId === SCREENS.SUMMARY_REVIEW) {
            body.append('<h2>Summary</h2>');
            var reviewTableString = '<table class="summary_table">';
            reviewTableString += '<thead><th>Question #</th><th>Your Answers</th><th>Review</th></thead>';
            reviewTableString += '<tbody id="summary_table_body">';

            $.each(main.questions, function(index, question) {
                var reviewButton = '<span class="submit_btn" style="background-color: cornflowerblue" id="review_q_"'+index+'>Review</span>';
                reviewTableString += '<td>'+index+'</td><td>'+question.userAnswers.join(',')+'</td><td>'+reviewButton+'</td>';
            });

            reviewTableString += '</tbody></table>';
            console.log(reviewTableString);
            body.append(reviewTableString);
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
    }
}