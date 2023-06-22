"use client";

import { useEffect, useState } from "react";

interface ClintOnlyProps {
  children: React.ReactNode;
}

const ClintOnly: React.FC<ClintOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClintOnly;
