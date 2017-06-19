import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Controller | visualize', function() {
  setupTest('controller:visualize', {
    needs: [
      'service:session',
      'service:intl',
      'service:metrics',
      'ember-metrics@metrics-adapter:piwik', // bundled adapter
    ]
  });

  // Replace this with your real tests.
  it('exists', function() {
    let controller = this.subject();
    expect(controller).to.be.ok;
  });
});
