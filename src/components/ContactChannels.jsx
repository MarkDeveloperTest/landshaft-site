import { trackOutboundLead } from "../lib/analytics";
import { ArrowIcon } from "./Icons";

export function ContactChannels({ channels, compact = false }) {
  return (
    <div className={`contact-grid${compact ? " contact-grid--compact" : ""}`}>
      {channels.map((channel) => (
        <a
          key={channel.id}
          className="contact-card"
          href={channel.href}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackOutboundLead(channel.label)}
        >
          <div>
            <p className="contact-card__label">{channel.label}</p>
            <strong>{channel.handle}</strong>
            <p className="contact-card__body">{channel.description}</p>
          </div>
          <ArrowIcon className="icon icon--arrow" />
        </a>
      ))}
    </div>
  );
}
