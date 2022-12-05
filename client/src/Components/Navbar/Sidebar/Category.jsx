import React, { useState } from 'react';
import { BsHouseDoor } from 'react-icons/bs';
import { BiBrain } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Category({ elem, title }) {
  const [dropDown, setDropwDown] = useState(false);
  const styles = {
    categories:
      'flex gap-2 items-center mt-2 pl-[19px] py-2 w-full bg-[#252A41] rounded-tl-xl rounded-bl-xl text-xl text-[#DCDEF3] cursor-pointer z-50',
    lists: `pl-[28%] text-[#9EA2C6] flex-col gap-2 py-2 ${
      dropDown ? 'flex' : 'hidden'
    } animate__animated animate__flipInX `,
  };

  return (
    <>
      <div className={styles.categories} onClick={() => setDropwDown(!dropDown)}>
        {elem === 'Categories' ? <BiBrain /> : <BsHouseDoor />}
        <h1>{title}</h1>
      </div>
      <ul className={styles.lists}>
        {elem.map((i) => (
          <Link to={`/${i.name}`} key={i.id}>
            <li className={styles.listItem}>{i.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Category;
