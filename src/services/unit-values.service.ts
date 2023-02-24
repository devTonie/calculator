import convert, { Unit, Measure } from 'convert-units';

export function getMeasureList(): Measure[] {
  return convert().measures();
}

export function getUnits(measure: Measure): Unit[] {
  return convert().list(measure).map((unit) => unit.abbr);
}

export function getWeightRates(from: Unit, to: Unit): number {
  return convert(1).from(from).to(to);
}

export function getSupportTableValues(fromMeasure: Measure, fromUnit: Unit): string[] {
  const possibilitiesUnits = convert().possibilities(fromMeasure);
  return possibilitiesUnits.map((unit) => `1 ${fromUnit} = ${convert(1).from(fromUnit).to(unit)} ${unit}`);
}