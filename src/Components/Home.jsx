import myphoto from "../assets/my-photo.jpeg";

function Home() {
    return (
        <>
            <h1>Career Objective</h1>
            <img src={myphoto} alt="My Photo" height="150px"/>
            <h4>B.Tech CSE graduate with experience in Python, Django, SQL, and web application development. Developed full
                stack projects and applying data-driven solutions. Seeking a Software Developer role to contribute to frontend and
                backend development, API integration, and performance optimization initiatives.</h4>
        </>
    )
}

export default Home;
