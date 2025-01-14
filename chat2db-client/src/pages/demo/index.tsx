import React, { useEffect, useState } from 'react';
import indexedDB from '@/indexedDB';

export enum CustomerTypeEnum {
  visitor = 'visitor',
  person = 'person',
}

export enum CustomerTypeEnum2 {
  visitor = 'visitor',
  person = 'person',
}

export type CustomerType1 = CustomerTypeEnum | CustomerTypeEnum2;

const App: React.FC = () => {
  const [db, setDb] = useState<any>();

  useEffect(() => {
    indexedDB.createDB('chat2db', 2).then((db) => {
      setDb(db);
    });
  }, []);

  const add = () => {
    indexedDB.addData(db, 'workspaceConsoleDDL', {
      userId: '1',
      consoleId: '1',
      ddl: 'select * from user',
    });
  };

  const deleteFn = () => {
    indexedDB.deleteData(db, 'workspaceConsoleDDL', '1');
  };

  return (
    <div>
      <button onClick={add}>add</button>
      <button onClick={deleteFn}>deleteFn</button>
    </div>
  );
};

export default App;
