import { NgModule                           } from '@angular/core';
import { CommonModule                       } from '@angular/common';
import { EnvironmentSupportModule           } from '../../support/module';

import { TabsComponent                      } from './component';
import { TabsListComponent                  } from './list/component';
import { TabContentComponent                } from './content/component';

const entryComponents = [ TabsListComponent, TabContentComponent, TabsComponent ];
const components = [ TabsComponent, ...entryComponents ];

@NgModule({
    entryComponents : [ ...entryComponents ],
    imports         : [ CommonModule, EnvironmentSupportModule ],
    declarations    : [ ...components ],
    exports         : [ ...components ]
})

export class TabsModule {
    constructor() {
    }
}
