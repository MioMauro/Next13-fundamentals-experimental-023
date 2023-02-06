async function fetchSessions() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}

export default async function page() {
  const data = await fetchSessions();
  return (
    <div className="bg-slate-200">
    <div className="self-start whitespace-nowrap bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
    Last Rendered: {new Date().toLocaleDateString()}
    </div>
    <h1 className="text-center font-bold text-2xl p-4">Welcome to Globomatic Sessions</h1>
    
    {data.sessions.map(
        ({ id, title, description, room, day, track, speakers }) => (
          <div key={id} className="p-4 border bg-slate-300">
            <h3 className="font-bold p-1">{title}</h3>

            {speakers && speakers.map(({ name }) => (
                <h3 className="ml-2 font-bold" key={id}>Speaker: {name}</h3>
              ))}
            <h5 className="italic font-medium border m-2 p-2 bg-slate-100">{description}</h5>
            <h4 className="font-semibold italic">Room: {room}</h4>
            <h4 className="font-semibold italic">Day: {day}</h4>
            <h4 className="font-semibold italic mb-2">Track: {track}</h4>
          </div>
        )
      )}
    </div>
  )
}
