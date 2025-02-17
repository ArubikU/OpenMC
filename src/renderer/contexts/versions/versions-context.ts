import React from 'react';
import VersionsHook from './versions-hook';
import Version, { VersionType } from '../../../common/versions/version';

const VersionsContext = React.createContext<VersionsHook>({
  versions: <Version[]>[],
  lastFile: null,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  downloadManifest: (version: Version): Promise<Version> => {
    return new Promise(() => {});
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getByType: (type: VersionType): Version[] => {
    return [];
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getByName: (name: string): Version | null => {
    return null;
  },
});

export default VersionsContext;
