import { cn } from '../cn';
import { tagHue } from '../tagHue';

export interface TagProps {
  /** The technology name. It sets both the label and the color. */
  name: string;
  className?: string;
}

/**
 * A chip that colors itself from its own name.
 *
 * The fill and the border derive from one hue variable, so a hue needs only
 * one value per color mode.
 */
export function Tag({ name, className }: TagProps) {
  const hue = `var(--color-tag-${tagHue(name)})`;

  return (
    <span
      data-hue={tagHue(name)}
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm',
        className,
      )}
      style={{
        color: hue,
        backgroundColor: `color-mix(in srgb, ${hue} 14%, transparent)`,
        borderColor: `color-mix(in srgb, ${hue} 35%, transparent)`,
      }}
    >
      {name}
    </span>
  );
}
