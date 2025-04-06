import { JSONValue } from '@/types/json.ts';
import JsonRenderer, { Indent } from '@/components/ui/json/json.tsx';

interface JsonArrayProps {
  data: JSONValue[];
  path: string;
  depth: number;
  onSelectPath: (path: string) => void;
}

export function JsonArray(
  {
    data,
    path,
    depth,
    onSelectPath,
  }: JsonArrayProps) {
  return (
    <>
      { depth !== 0 ? <>{'['}</>: null}

      {data.map((item, index) => (
        <div key={index}>
          <Indent depth={depth + 1} />
          <JsonRenderer
            data={item}
            path={`${path}[${index}]`}
            depth={depth + 1}
            onSelectPath={onSelectPath}
          />
        </div>
      ))}

      { depth !== 0 ? <><Indent depth={depth} />],</>: null}
    </>
  );
}
