import { useEffect, useMemo, useState } from 'react';

const useLinkTypeGenerator = (
  items: Array<TaskbarItem>,
  status: AuthStatusTypes
): Array<TaskbarItem> => {
  let publicItems = useMemo<Array<TaskbarItem>>(() => [], []),
    userItems = useMemo<Array<TaskbarItem>>(() => [], []),
    nonUserItems = useMemo<Array<TaskbarItem>>(() => [], []);
  const [generatedItems, setGeneratedIetms] = useState<Array<TaskbarItem>>([]);

  const defaultGeneratedItems = () => {
    setGeneratedIetms([]);
  };

  useEffect(() => {
    defaultGeneratedItems();
    setGeneratedIetms([
      ...publicItems,
      ...(status === 'authenticated'
        ? userItems
        : status === 'unauthenticated'
        ? nonUserItems
        : []),
    ]);
  }, [status, publicItems, userItems, nonUserItems]);

  items.map((item) => {
    if (item.isPublic) {
      publicItems = [...publicItems, item];
    } else if (!item.isPublic && status !== 'loading') {
      if (item.privateType === 'user') {
        userItems = [...userItems, item];
      } else if (item.privateType === 'nonuser') {
        nonUserItems = [...nonUserItems, item];
      }
    }
  })[0];

  return generatedItems;
};

export default useLinkTypeGenerator;
