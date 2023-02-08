import { speakerJson } from "../page";


function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app

  const speakerInfo = speakerJson.speakers?.find(
    (speaker) => speaker.name == params.slug
  );

  return speakerInfo;
}

export default async function Page({ params }) {
  const speakerInfo = fetchSpeakerInfo(params);

  const { name, bio, sessions } = speakerInfo;

  return (
    <div className="">
      <h3 className="">{name}</h3>
      <h5 className="">About: {bio}</h5>
      {sessions &&
        sessions.map(({ id, name }) => (
          <div key={id}>
            <h5 className="">Session: {name}</h5>
          </div>
        ))}
    </div>
  );
}