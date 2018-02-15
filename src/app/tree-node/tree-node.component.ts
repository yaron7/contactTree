import { Component, Input } from '@angular/core';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent {

  @Input() node;
  contactID: number;

  toggleContacts(node) {
    if (node.contacts) {
      if (this.contactID == node.id) {
        this.contactID = -1;
      }
      else {
        this.contactID = node.id;
      }
    }
  }

}
