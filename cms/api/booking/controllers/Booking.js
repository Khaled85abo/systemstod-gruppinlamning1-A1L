'use strict';

/**
 * Booking.js controller
 *
 * @description: A set of functions called "actions" for managing `Booking`.
 */

module.exports = {

  /**
   * Retrieve booking records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.booking.search(ctx.query);
    } else {
      return strapi.services.booking.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a booking record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.booking.fetch(ctx.params);
  },

  /**
   * Count booking records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.booking.count(ctx.query, populate);
  },

  /**
   * Create a/an booking record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.booking.add(ctx.request.body);
  },

  /**
   * Update a/an booking record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.booking.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an booking record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.booking.remove(ctx.params);
  }
};
