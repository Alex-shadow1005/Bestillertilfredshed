    let sidsteMåneed = document.querySelectorAll('.sidsteMåned');
    for (let i = 0; i < sidsteMåneed.length; i++) {
        let inputs = [];
        for (let i = 1; i <= 2; i++) {
            let span = document.createElement("span");
            span.textContent = "Sidste Månedes Indmeldinger";
            inputs.push(span);
        }
        inputs.forEach(span => {
            sidsteMåneed[i].appendChild(span);
        });
    }

    let inputs = [];
    for (let i = 1; i <= 4; i++) {
        let span2 = document.createElement("span2");
        span2.textContent = "Indvendigt Vedligehold";
        inputs.push(span2);
    }
    inputs.forEach(span2 => {
        document.querySelector('.title-container').appendChild(span2);
    });