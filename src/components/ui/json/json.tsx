import { JSONValue } from '@/types/json.ts';
import { JsonArray } from '@/components/ui/json/array.tsx';
import { JsonObject } from '@/components/ui/json/object.tsx';
import './json.css';

interface JsonRendererProps {
  data: JSONValue;
  path: string;
  depth: number;
  onSelectPath: (path: string) => void;
}

export default function JsonRenderer(
  {
    data,
    path,
    depth,
    onSelectPath,
  }: JsonRendererProps) {
  if (Array.isArray(data)) {
    return (
      <JsonArray
        data={data}
        path={path}
        depth={depth}
        onSelectPath={onSelectPath}
      />
    );
  }

  if (typeof data === 'object' && data !== null) {
    return (
      <JsonObject
        data={data}
        path={path}
        depth={depth}
        onSelectPath={onSelectPath}
      />
    );
  }

  return (
    <span className="json-value">
      {typeof data === 'string' ? `'${data}',` : `${String(data)},`}
    </span>
  );
}

export function Indent({ depth }: { depth: number }) {
  return <span className="json-indent">{'\t'.repeat(depth)}</span>;
}