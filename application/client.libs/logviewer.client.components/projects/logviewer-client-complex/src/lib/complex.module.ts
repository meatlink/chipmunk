import { NgModule                               } from '@angular/core';
import { CommonModule                           } from '@angular/common';

import { TabsModule                             } from './tabs/module';
import { DockingModule                          } from './docking/module';
import { InfinityOutputModule                   } from './infinityoutput/module';
import { ScrollBoxModule                        } from './scrollbox/module';


@NgModule({
    entryComponents : [  ],
    imports         : [ CommonModule ],
    declarations    : [  ],
    exports         : [ TabsModule, DockingModule, InfinityOutputModule, ScrollBoxModule ]
})

export class ComplexModule { }
