import { useEffect, useState } from 'react';
import { JSONValue } from '@/types/json.ts';
import { isArrayOfPrimitives, isPrimitive, resolvePath } from '@/utils/json.ts';
import JsonRenderer from '@/components/ui/json/json.tsx';
import './json-explorer-layout.css';
import { jsonData } from '@/components/ui/json/json.data.ts';

export default function JsonExplorer() {
  const initPathInputValue = 'Select a json key';
  const [pathInput, setPathInput] = useState<string>(initPathInputValue);
  const [pathValue, setPathValue] = useState<JSONValue | undefined>(undefined);
  const [json, setJson] = useState<JSONValue>(jsonData[0]);
  const [jsonDataIdx, setJsonDataIdx] = useState<number>(0);

  useEffect(() => {
    if (!pathInput) {
      setPathValue(undefined);
      return;
    }
    const value = resolvePath(json, pathInput);
    setPathValue(
      isPrimitive(value) || isArrayOfPrimitives(value) ? value : undefined,
    );
  }, [pathInput]);

  return (
    <div className="json-explorer">
      <p className="json-title">Property</p>
      <div className="json-handler-container">
        <input
          type="text"
          placeholder="Property"
          value={pathInput}
          onChange={(e) => setPathInput(e.target.value)}
          className="json-input"
        />
        <select value={jsonDataIdx}
                onChange={e => {
                  const selectedIndex = Number(e.target.value);
                  setJsonDataIdx(selectedIndex);
                  setJson(jsonData[selectedIndex]);
                  setPathInput(initPathInputValue);
                  setPathValue(undefined)
                }}
                className="json-select">
          {jsonData.map((_item: JSONValue, index) => (
            <option key={index} value={index}>{`Item: ${index}`}</option>
          ))}
        </select>
      </div>
      <div className="json-value-display">{`${pathValue}`}</div>
      <p className="json-title">Response</p>
      <div className="json-container">
        <JsonRenderer path="res"
                      depth={0} data={json} onSelectPath={setPathInput} />
      </div>
    </div>
  );
}
