/**
 * @param { Object } nestedState
 * @param { Object } updatedPart
 **/
export function combineNestedState( nestedState, updatedPart ) {
  return { ...nestedState, ...updatedPart };
}