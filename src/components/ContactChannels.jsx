import { trackOutboundLead } from "../lib/analytics";
import { ArrowIcon, MarkIcon, SendIcon } from "./Icons";

const channelIcons = {
  instagram: MarkIcon,
  telegram: SendIcon,
};

export function ContactChannels({ channels, compact = false }) {
  return (
    <div className={`contact-grid${compact ? " contact-grid--compact" : ""}`}>
      {channels.map((channel) => (
        (() => {
          const ChannelIcon = channelIcons[channel.id] ?? ArrowIcon;

          return (
            <a
              key={channel.id}
              className={`contact-card${compact ? " contact-card--compact" : ""}`}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackOutboundLead(channel.label)}
            >
              <div className="contact-card__content">
                <div className="contact-card__head">
                  <span className="contact-card__icon-wrap">
                    <ChannelIcon className="icon icon--feature" />
                  </span>

                  <div className="contact-card__meta">
                    <span className="contact-card__platform">{channel.label}</span>
                    <strong>{channel.handle}</strong>
                    {compact ? null : (
                      <p className="contact-card__body">{channel.description}</p>
                    )}
                  </div>
                </div>

                <span className="contact-card__cta" aria-hidden="true">
                  <ArrowIcon className="icon icon--arrow" />
                </span>
              </div>
            </a>
          );
        })()
      ))}
    </div>
  );
}
