import React from 'react';
import { MdPlayArrow } from 'react-icons/md';
const styles = {
  container: 'w-8 h-8 relative cursor-pointer',
  image: 'rounded-[50%] hover:border-2 hover:border-[#DCDEF3] absolute ',
  arrow: 'absolute -bottom-1 -left-3 rotate-90 text-[#DCDEF3] text-sm',
};
function UserPhotoNavbar({ handleUserProfile }) {
  return (
    <div className={styles.container} onClick={handleUserProfile}>
      <img
        className={styles.image}
        src="data:image/png;base64,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"
        alt="userPhoto"
      />
      <MdPlayArrow className={styles.arrow} />
    </div>
  );
}

export default UserPhotoNavbar;
