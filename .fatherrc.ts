import { IBundleOptions } from 'father-build';

const options: IBundleOptions = {
  entry: 'src/index.ts',
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: 'useSizeRef',
    globals: {
      'react': 'React',
    }
  },
  preCommit: {
    eslint: true,
    prettier: true,
  },
};

export default options;
