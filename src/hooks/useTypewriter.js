import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Types and deletes each word in turn. Under prefers-reduced-motion it simply
 * swaps whole words every few seconds instead of animating characters.
 */
export default function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 40, pause = 1600 } = {}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduce ? words[0] : '');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 3000);
      return () => clearInterval(id);
    }
    const word = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;
    if (deleting && text === '') delay = 300;

    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, words, reduce, typeSpeed, deleteSpeed, pause]);

  return reduce ? words[index % words.length] : text;
}
