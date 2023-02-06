
// Static site generation by default
async function fetchSpeakers(){
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
    { next: {revalidate: 20} }
  );

  const data = response.json();
  return data;
}

export default async function page() {
  const data = await fetchSpeakers();

  return (
    <div className="bg-slate-200">
    <div className="self-start whitespace-nowrap bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
    Last Rendered: {new Date().toLocaleDateString()}
    </div>
    <h1 className="text-center font-bold text-2xl p-4">Welcome to Globomatics Speakers</h1>
    {data.speakers.map(({id, name, bio}) => (
      <div key={id} className="p-4 border-b bg-slate-300">
        <h3 className="font-bold ml-4 p-2 underline">{name}</h3>
        <h5 className="italic font-medium">- {bio}</h5>
      </div>
    ))}    
    </div>
  )
}
