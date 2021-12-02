#include <stdio.h>
#include <stdlib.h>

typedef struct _listnode
{
    int num;
    struct _listnode *next;
} ListNode;


void printList(ListNode *head)
{
    ListNode *cache = head;
    while (cache != NULL)
    {
        printf("\t %d \n", cache->num  );
        cache = cache->next;
    }
}

ListNode *findNode(ListNode *head, int i)
{
    ListNode *cur = head;
    if ((head == NULL) || (i < 0))
    {
        printf("\nDanh sach lien ket rong hoac phan tu tim kiem khong ton tai");
        return NULL;
    }
    while (i > 0)
    {
        cur = cur->next;
        i = i - 1;
        if (cur == NULL)
        {
            printf("\nPhan tu tim kiem khong ton tai");
            return NULL;
        }
    }
    return cur;
}

void insertNode(ListNode **pHead, int index, int value)
{
    ListNode *cur, *newNode;

    if (*pHead == NULL || index == 0) 
    {
        newNode = (ListNode *)malloc(sizeof(ListNode));
        newNode->num = value;
        newNode->next = *pHead;
        *pHead = newNode;
    }
    else if ((cur = findNode(*pHead, index - 1)) != NULL)
    {
        newNode = (ListNode *)malloc(sizeof(ListNode));
        newNode->num = value;
        newNode->next = cur->next;
        cur->next = newNode;
    }
    else
        printf("\ncan not insert the new item at index %d!\n", index);
}

void removeNode(ListNode **ptrHead, int index)
{   
    ListNode *cur, *pre;
    if(index == 0) {
        cur = *ptrHead;
        *ptrHead = cur->next;
        free(cur);
    }
    else {
        pre = findNode(*ptrHead, index - 1);
        cur = pre->next;
        pre->next = cur->next;
        free(cur);
    }
}

int main()
{
    ListNode *newNode, *head = NULL;
    
    newNode = malloc(sizeof(ListNode));
    head = newNode;
        
    newNode->num=123;
    newNode->next = (ListNode *)malloc(sizeof(ListNode));
    newNode = newNode->next;
        
    newNode->num=124;
    newNode->next = (ListNode *)malloc(sizeof(ListNode));
    newNode = newNode->next;
        
	newNode->num=125;
    newNode->next = (ListNode *)malloc(sizeof(ListNode));
    newNode = newNode->next;
        
	newNode->num=126;
    newNode->next = (ListNode *)malloc(sizeof(ListNode));
    newNode = newNode->next;
        
	newNode->num=127;
    newNode->next = NULL;
	printf("\nIn lan dau tien --------------------------------------------------------\n");
    printList(head);
    
    
	printf("\nThem 999 vao phan tu thu 4-----------------------------------------------------\n");
    insertNode(&head,4,999);
    printList(head);
    
    
    printf("\nThem 666 vào dau tien -----------------------------------------------------------\n");
    insertNode(&head,0,666);
    printList(head);
    
    
    printf("\nIn lan thu 2----------------------------------------------------------------\n");
    printList(head);
    
    
    printf("\nXoa phan tu 0 --------------------------------------------------------------\n");
    removeNode(&head,0);
    printList(head);
    
    
    printf("\nXoa phan tu thu 3--------------------------------------------------------------\n");
    removeNode(&head,3);
    printList(head);
    
    
    printf("\nIn lan thu 3----------------------------------------------------------------\n");
    printList(head);

    
}
