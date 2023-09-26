// клавиши
let do_btn = document.getElementById('do_btn');
let re_btn = document.getElementById('re_btn');
let mi_btn = document.getElementById('mi_btn');
let fa_btn = document.getElementById('fa_btn');
let sol_btn = document.getElementById('sol_btn');
let lja_btn = document.getElementById('lja_btn');
let si_btn = document.getElementById('si_btn');
// ноты


do_btn.onclick = e => {
    var _do = document.getElementById('do');

    if (_do.paused) {
        _do.play();
    } else {
        _do.pause();
    }

}

re_btn.onclick = e => {
    var _re = document.getElementById('re');

    if (_re.paused) {
        _re.play();
    } else {
        _re.pause();
    }
}

mi_btn.onclick = e => {
    var _mi = document.getElementById('mi');

    if (_mi.paused) {
        _mi.play();
    } else {
        _mi.pause();
    }
}

fa_btn.onclick = e => {
    var _fa = document.getElementById('fa');

    if (_fa.paused) {
        _fa.play();
    } else {
        _fa.pause();
    }
}

sol_btn.onclick = e => {
    var _sol = document.getElementById('sol');

    if (_sol.paused) {
        _sol.play();
    } else {
        _sol.pause();
    }
}

lja_btn.onclick = e => {
    var _lja = document.getElementById('lja');

    if (_lja.paused) {
        _lja.play();
    } else {
        _lja.pause();
    }
}

si_btn.onclick = e => {
    var _si = document.getElementById('si');

    if (_si.paused) {
        _si.play();
    } else {
        _si.pause();
    }
}

window.addEventListener('keydown', e => {

    var _do = document.getElementById('do');

    if (e.key == "1") {
        if (_do.paused) {
            _do.play();
        } else {
            _do.pause();
        }
    }
});

window.addEventListener('keydown', e => {

    var _re = document.getElementById('re');

    if (e.key == "2") {
        if (_re.paused) {
            _re.play();
        } else {
            _re.pause();
        }
    }
});

window.addEventListener('keydown', e => {

    var _mi = document.getElementById('mi');

    if (e.key == "3") {
        if (_mi.paused) {
            _mi.play();
        } else {
            _mi.pause();
        }
    }
});

window.addEventListener('keydown', e => {

    var _fa = document.getElementById('fa');

    if (e.key == "4") {
        if (_fa.paused) {
            _fa.play();
        } else {
            _fa.pause();
        }
    }
});

window.addEventListener('keydown', e => {

    var _sol = document.getElementById('sol');

    if (e.key == "5") {
        if (_sol.paused) {
            _sol.play();
        } else {
            _sol.pause();
        }
    }
});

window.addEventListener('keydown', e => {

    var _lja = document.getElementById('lja');

    if (e.key == "6") {
        if (_lja.paused) {
            _lja.play();
        } else {
            _lja.pause();
        }
    }
});

window.addEventListener('keydown', e => {

    var _si = document.getElementById('si');

    if (e.key == "7") {
        if (_si.paused) {
            _si.play();
        } else {
            _si.pause();
        }
    }
});