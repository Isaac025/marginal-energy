import { company } from "../data/content";

export default function UtilityBar() {
  const fullAddress = company.address.join(" ");

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <div className="me-util">
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Locate ${fullAddress} on Google Maps`}
      >
        {fullAddress}
      </a>

      <a href={`mailto:${company.email}`}>{company.email}</a>

      <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
    </div>
  );
}
