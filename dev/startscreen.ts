class startScreen {
    public button: HTMLElement;
    public title: HTMLElement;
    public text: HTMLElement;
    constructor() {
        this.title = document.createElement('title');
        document.body.appendChild(this.title);

        this.title.innerHTML = 'Welkom to the best Asteroid Shooter';

        this.text = document.createElement('text');
        document.body.appendChild(this.text);

        this.text.innerHTML = 'Schiet de Asteroid en hou het het lang zo mogelijk vol. Wanner een Asteroid de onderkant van je scherm aanraakt ben je af. Probeer een hoge score te krijgen'

        this.button = document.createElement('playButton');
        document.body.appendChild(this.button);

        this.button.innerHTML = 'Spelen!';
        this.button.addEventListener("click", () => this.deleteAll());
    }
    deleteAll() {
        this.title.remove();
        this.title = undefined;
        this.text.remove();
        this.text = undefined;
        this.button.remove();
        this.button = undefined;

        new Game();

    }

}