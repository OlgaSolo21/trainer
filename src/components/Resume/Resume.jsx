
export default function Resume() {
    const onButtonClick = () => {
        const pdfUrl = "myCV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "myCV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="container">
            <div className="resume">
                <div className="resume__pdf">
                    <iframe
                        src="https://drive.google.com/file/d/1RMVRmfj24C6oh6JhRXqB1elDJgNOGkLO/preview"
                        width="500" height="550"></iframe>
                </div>
                <div className="resume__content">
                    <button
                        className="resume__btn"
                        onClick={onButtonClick}>Download CV
                    </button>
                    <a href="https://sochi.hh.ru/resume/cd402bc5ff0d70b5870039ed1f706e6c356859"
                       className="resume__btn"
                       target="_blank"
                    >Link to HH.ru</a>
                </div>
            </div>
        </section>
    )
}