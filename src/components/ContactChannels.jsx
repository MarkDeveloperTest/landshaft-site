import { trackOutboundLead } from "../lib/analytics";
import { ArrowIcon, MarkIcon, SendIcon } from "./Icons";

const channelIcons = {
  instagram: MarkIcon,
  telegram: SendIcon,
};

export function ContactChannels({ channels, compact = false }) {
  return (
    <div className={`contact-grid${compact ? " contact-grid--compact" : ""}`}>
      {channels.map((channel) => {
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
                <div className="contact-card__topline">
                  <div className="contact-card__label-row">
                    <span className="contact-card__icon-wrap">
                      <ChannelIcon className="icon icon--feature" />
                    </span>
                    <span className="contact-card__platform">{channel.label}</span>
                  </div>

                  <span className="contact-card__cta" aria-hidden="true">
                    <ArrowIcon className="icon icon--arrow" />
                  </span>
                </div>

                <div className="contact-card__meta">
                  <strong>{channel.handle}</strong>
                  <p className="contact-card__body">{channel.description}</p>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
