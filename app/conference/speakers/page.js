import Link from "next/link";

export let speakerJson = {};

// Static data fetching
async function fetchSpeakers() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
  );

  const data = await response.json();
  speakerJson = data;
  return data;
}

export default async function Page() {
  const data = await fetchSpeakers();

  return (
    <div className="">
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>
      {data.speakers.map(({ id, name, bio }) => (
        <div key={id} className="">
          <Link
            className=""
            href={`/conference/speakers/${bio}`}
          >
            <h3 className="">{bio}</h3>
          </Link>
          <h5 className="">{bio}</h5>
        </div>
      ))}
    </div>
  );
}

