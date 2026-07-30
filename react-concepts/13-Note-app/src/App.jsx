import React, { useState } from "react";

function App() {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [notes, setNotes] = useState([]);

  // ADD NOTES
  const submitHandler = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      details,
    };

    setNotes([...notes, newNote]);

    // Clear Inputs
    setTitle("");
    setDetails("");
  };

  // DELETE NOTE
  const deleteHandler = (index) => {

    const copyNotes = [...notes];

    copyNotes.splice(index, 1);

    setNotes(copyNotes);
  };

  return (

    <div className="min-h-screen bg-black text-white p-5 lg:p-10">

      <div className="flex flex-col lg:flex-row gap-10">

        {/* FORM */}
        <div className="w-full lg:w-1/2">

          <h1 className="text-3xl font-bold mb-8">
            Notes App
          </h1>

          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-5"
          >

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-2 border-zinc-700 bg-zinc-900 rounded-xl px-5 py-3 outline-none"
              type="text"
              placeholder="Enter Notes Heading"
            />

            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full h-40 border-2 border-zinc-700 bg-zinc-900 rounded-xl px-5 py-3 outline-none resize-none"
              placeholder="Write Details"
            ></textarea>

            <button className="bg-white text-black font-semibold py-3 rounded-xl">
              Add Notes
            </button>

          </form>

        </div>

        {/* NOTES SECTION */}
        <div className="w-full lg:w-1/2">

          <h2 className="text-2xl font-bold mb-6">
            Recently Added Notes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {
              notes.map((note, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 p-5 rounded-2xl border border-zinc-700"
                >

                  <h3 className="text-xl font-semibold mb-3">
                    {note.title}
                  </h3>

                  <p className="text-zinc-300 text-sm mb-5">
                    {note.details}
                  </p>

                  <button
                    onClick={() => deleteHandler(index)}
                    className="bg-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              ))
            }

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;