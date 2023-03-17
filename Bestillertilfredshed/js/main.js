    let sidsteMåneed = document.querySelectorAll('.sidsteMåned');
    for (let i = 0; i < sidsteMåneed.length; i++) {
        let inputs = [];
        for (let i = 1; i <= 2; i++) {
            let span1 = document.createElement("span1");
            span1.textContent = "Sidste Månedes Indmeldinger";
            inputs.push(span1);
        }
        inputs.forEach(span1 => {
            sidsteMåneed[i].appendChild(span1);
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