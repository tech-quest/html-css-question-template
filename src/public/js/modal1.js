const birthdayEditLink = document.querySelector(
  '.profileEditModal__birthdayDisplayTitleContent--link'
);
const birthdayEditConfirmationModal = document.querySelector(
  '.birthdayEditConfirmationModal'
);

/*
 * プロフィール編集モーダルの生年月日編集確認モーダルの表示
 */
birthdayEditLink.addEventListener('click', (event) => {
  birthdayEditConfirmationModal.classList.remove(
    'birthdayEditConfirmationModal__hide'
  );
  birthdayEditConfirmationModal.classList.add(
    'birthdayEditConfirmationModal__show'
  );
});

/*
 * 生年月日編集確認モーダルの「キャンセル」をクリックしたときの非表示処理
 */
const birthdayEditConfirmationModalCancelButton = document.querySelector(
  '.birthdayEditConfirmationModal_cancelButton'
);
birthdayEditConfirmationModalCancelButton.addEventListener('click', (event) => {
  birthdayEditConfirmationModal.classList.add(
    'birthdayEditConfirmationModal__hide'
  );
  birthdayEditConfirmationModal.classList.remove(
    'birthdayEditConfirmationModal__show'
  );
});

/*
 * 生年月日編集確認モーダル以外をクリックしたときの非表示処理
 */
const birthdayEditConfirmationModalId = document.getElementById(
  'birthdayEditConfirmationModal'
);
birthdayEditConfirmationModalId.addEventListener('click', (evemt) => {
  if (event.target.closest('#birthdayEditConfirmationModal-content') === null) {
    birthdayEditConfirmationModal.classList.add(
      'birthdayEditConfirmationModal__hide'
    );
    birthdayEditConfirmationModal.classList.remove(
      'birthdayEditConfirmationModal__show'
    );
  }
});

/*
 * 生年月日編集確認モーダルの「編集」をクリックしたときの表示処理
 */
const birthdayEditConfirmationModalEditButton = document.querySelector(
  '.birthdayEditConfirmationModal__editButton'
);
const birthdayDisplayTitleWrappers = document.querySelectorAll(
  '.profileEditModal__birthdayDisplayTitleWrapper'
);
birthdayEditConfirmationModalEditButton.addEventListener('click', (event) => {
  birthdayEditConfirmationModal.classList.add(
    'birthdayEditConfirmationModal__hide'
  );
  birthdayEditConfirmationModal.classList.remove(
    'birthdayEditConfirmationModal__show'
  );

  birthdayDisplayTitleWrappers.forEach((element) => {
    element.classList.toggle('profileEditModal__birthdayEditContentHide');
  });
});
