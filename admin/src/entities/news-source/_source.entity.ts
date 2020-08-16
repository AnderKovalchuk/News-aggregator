import { EParsingFilter } from "./_parsing-filter.enum";
import { EParsingType } from "./_parsing-type.enum";
import { ESourceStatus } from "./_source-status.enum";

export default interface ISource {
  id      : number;
  title   : string;
  link    : string;

  parsingType   : EParsingType;
  parsingFilter : EParsingFilter;
  sourceStatus  : ESourceStatus;

  comment?  : string;
}