/**
 * Add-ons actions.
 * @module actions/addons/addons
 */

import {
  INSTALL_ADDON,
  LIST_ADDONS,
  UNINSTALL_ADDON,
} from '../../constants/ActionTypes';


/**
 * List addons function
 * @function listAddons
 * @param {string} query Query
 * @returns {Object} List addons action
 */
export function listAddons() {
	console.log('in listAddons');
  return {
    type: LIST_ADDONS,
    promise: api => api.get('/@addons'),
  };
}

/**
 * Install addon function.
 * @function installAddon
 * @param {string} id Addon id
 * @returns {Object} install addon action.
 */
export function installAddon(id) {
  return {
    type: INSTALL_ADDON,
    promise: api => api.post(`/@addons/${id}/install`, { data: { id } }),
  };
}

/**
 * Uninstall addon function.
 * @function uninstallAddon
 * @param {string} id Addon id
 * @returns {Object} uninstall addon action.
 */
export function uninstallAddon(id ) {
	console.log('uninstallAddon');
  return {
    type: UNINSTALL_ADDON,
    promise: api => api.post(`/@addons/${id}/uninstall`, { data: { id } }),
  };
}
