import React from 'react';
import Link from './Link';

export default function LinkList() {
  return (
    <ul className="link__list">
      <Link name="home" />
      <Link name="portfolio" />
      <Link name="home" />
      <Link name="portfolio" />
    </ul>
  );
}
