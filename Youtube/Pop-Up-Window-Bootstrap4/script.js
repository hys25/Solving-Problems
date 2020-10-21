// TASK: Create a window that pops up in 3 seconds after loading the page. In the window - ticker "I agree". If the user selects this option and closes the window, the window shall not be displayed at the next updates. If the user does not select the "I agree" option, then repeat the window output after page refreshing.

"use strict";
$(document).ready(function(){
    showStartModal();
});

function showStartModal(){
    if (localStorage.getItem('modalAgreeBtn') != 1 ) {
        setTimeout (function(){
            $('#exampleModal').modal('show');
            $('#modal-agree-btn').on('click', function(){
                localStorage.setItem('modalAgreeBtn', '1');
                $('#exampleModal').modal('hide');
            });
        }, 3000);
    }
}