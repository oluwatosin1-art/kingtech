import { useReveal } from '../hooks/useReveal';

/**
 * Wraps children in a div that fades + slides in on scroll.
 * Props:
 *   - delay: ms to delay the animation (default 0)
 *   - y: starting vertical offset in px (default 40)
 *   - as: HTML tag to render (default 'div')
 *   - className: extra classes
 */
export default function Reveal({
  children,
  delay = 0,
  y = 40,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}