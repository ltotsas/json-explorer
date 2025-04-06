import { JSONObject } from '@/types/json.ts';
import { isArrayOfPrimitives, isPrimitive } from '@/utils/json.ts';
import JsonRenderer, { Indent } from '@/components/ui/json/json.tsx';

interface JsonObjectProps {
  data: JSONObject;
  path: string;
  depth: number;
  onSelectPath: (path: string) => void;
}

export function JsonObject(
  {
    data,
    path,
    depth,
    onSelectPath,
  }: JsonObjectProps) {
  const entries = Object.entries(data);

  return (
    <>
      { depth !== 0 ? <>{'{'}</>: null}

      {entries.map(([key, value]) => {
        const newPath = `${path}.${key}`;
        const isClickable = isPrimitive(value) || isArrayOfPrimitives(value);

        return (
          <div key={key}>
            <Indent depth={depth + 1} />
            <span
              className={`json-key ${isClickable ? 'clickable' : 'unclickable'}`}
              onClick={() => isClickable && onSelectPath(newPath)}
            >
              {key}
              </span>
            :{' '}
            <JsonRenderer
              data={value}
              path={newPath}
              depth={depth + 1}
              onSelectPath={onSelectPath}
            />
          </div>
        );
      })}

      { depth !== 0 ? <><Indent depth={depth} />{'},'}</>: null}
    </>
  );
}