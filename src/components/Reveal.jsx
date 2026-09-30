import { useInView } from '../lib/useInView'

/**
 * Fades and lifts content in the first time it scrolls into view.
 * `stagger` animates each direct child in sequence instead of the wrapper.
 */
export default function Reveal({ as: Tag = 'div', className = '', stagger = false, children, ...rest }) {
  const [ref, visible] = useInView({ threshold: 0, rootMargin: '0px 0px 12% 0px' })
  return (
    <Tag
      ref={ref}
      className={`${stagger ? 'reveal-stagger' : 'reveal'} ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
