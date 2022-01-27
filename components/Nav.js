import requests from "../utils/requests";

export function Nav() {
  return (
    <nav>
      <div className="flex">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h3 key={key}>{title}</h3>
        ))}
      </div>
    </nav>
  );
}
