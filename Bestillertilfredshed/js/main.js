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