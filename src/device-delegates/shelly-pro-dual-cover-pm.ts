import {
  ShellyProDualCoverPm,
  ShellyProDualCoverPmRev1,
} from 'shellies-ds9';

import { DeviceDelegate } from './base';

/**
 * Handles Shelly Pro Dual Cover PM devices.
 */
export class ShellyProDualCoverPmDelegate extends DeviceDelegate {
  protected setup() {
    const d = this.device as ShellyProDualCoverPm;
    const isCover = d.profile === 'cover';

    this.addCover(d.cover0, { active: isCover });
    this.addCover(d.cover1, { active: isCover });

    this.addSwitch(d.switch0, { active: !isCover });
    this.addSwitch(d.switch1, { active: !isCover });
    this.addSwitch(d.switch2, { active: !isCover });
    this.addSwitch(d.switch3, { active: !isCover });
  }
}

DeviceDelegate.registerDelegate(
  ShellyProDualCoverPmDelegate,
  ShellyProDualCoverPm,
  ShellyProDualCoverPmRev1,
);
