import { Nav } from "./nav.jsx";
import { Note } from "./note.jsx";
import { Footer } from "./footer.jsx";
import { AddNote } from "./addNote.jsx";

export function App() {
    return (
        <div className="overflow-hidden ">
            <Nav />
            <div className="container p-3">
                <div className="row align-items-center justify-content-center">
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                </div>
            </div>
            <AddNote />
            <Footer />
        </div>
    )
}
