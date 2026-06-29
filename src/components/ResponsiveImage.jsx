export function ResponsiveImage({
  asset,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "100vw",
}) {
  const label = alt ?? asset.alt ?? "";

  return (
    <picture className={className}>
      {asset.webp ? <source srcSet={asset.webp} type="image/webp" sizes={sizes} /> : null}
      <img
        className={imageClassName}
        src={asset.src}
        alt={label}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
