import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { sidebarState } from '../../store/atoms'

export default function useActions() {
  const [{ open }, setSidebar] = useRecoilState(sidebarState);
  const [displayProfile, setDisplayProfile] = useState(false);
  const [displayNotification, setDisplayNotification] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 800) {
      setSidebar({ open: !open });
    }
  };

  const onDisplay = () => {
    setDisplayProfile(!displayProfile);
  };

  const onDisplayNotification = () => {
    setDisplayNotification(!displayNotification);
  };

  const hideDisplay = () => {
    setDisplayProfile(false);
    setDisplayNotification(false);
  };

  const handleClick = () => {
    setSidebar({ open: !open });
  };

  return {
    onDisplay,
    onDisplayNotification,
    hideDisplay,
    handleClick,
    displayProfile,
    displayNotification,
    handleResize,
  };
}
