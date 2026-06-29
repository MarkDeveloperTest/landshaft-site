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
          <div className="contact-card__content">
            <div className="contact-card__head">
              <p className="contact-card__label">Канал зв&apos;язку</p>
              <span className="contact-card__platform">{channel.label}</span>
            </div>
            <strong>{channel.handle}</strong>
            <p className="contact-card__body">{channel.description}</p>
            <span className="contact-card__cta">Написати в {channel.label}</span>
          </div>
          <ArrowIcon className="icon icon--arrow" />
        </a>
      ))}
    </div>
  );
}
