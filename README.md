# useSizeRef

A react-hook that notify the size change of dom element

## Install

```
npm i use-size-ref --save
```

## Usage

```
import { useSizeRef } from 'use-size-ref';

const [ref, { width, height }] = useSizeRef();

console.log(width, height);
return (<div ref={ref} />)
```

## LICENSE

MIT